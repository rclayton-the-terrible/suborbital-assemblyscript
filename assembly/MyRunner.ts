import Runnable from './runnable'

class MyRunnable implements Runnable {
    run(input: string): string {
        return 'bar';
    }
}

export default MyRunnable;
