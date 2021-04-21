import { action, observable } from 'mobx'

class CounterStore {
  @observable
  counter: number = 10;
  @action
  counterStore() {
    this.counter++
  };
  @action
  increment() {
    this.counter++
  };
  @action
  decrement() {
    this.counter--
  };
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }
  get getCounter() {
    return this.counter;
  }
}

export default CounterStore

// const counterStore = observable({
//   counter: 0,
//   counterStore() {
//     this.counter++
//   },
//   increment() {
//     this.counter++
//   },
//   decrement() {
//     this.counter--
//   },
//   incrementAsync() {
//     setTimeout(() => {
//       this.counter++
//     }, 1000)
//   }
// })