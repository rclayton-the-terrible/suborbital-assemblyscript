import MyRunnable from './MyRunner'

export function add(a: i32, b: i32): i32 {
    return a + b;
}

export function subtract(a: i32, b: i32): i32 {
    return a - b;
}

export function foo(input: i32): i32 {

    const runner = new MyRunnable()
    runner.run('blow');

    return 12;
}

