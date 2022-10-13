class Reactive {
  #value = null;
  #subs = [];

  constructor(value) {
    this.#value = value;
  }

  get value() {
    console.log(this)
    return this.#value;
  }

  dispatch(value) {
    this.#value = value;
    this.#subs.forEach((fn) => {
      if (fn && typeof fn === "function") fn(value);
    });
  }

  subscribe(cb) {
    cb && this.#subs.push(cb);
  }
}

export default Reactive;
