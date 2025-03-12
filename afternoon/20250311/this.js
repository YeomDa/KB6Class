const sayHello = () => {
    console.log(`Hello, I'm ${this}`);
}
const boy = {
    name: 'mike',
    sayHello
};

const girl = {
    name: 'jane',
    sayHello
};

boy.sayHello();
girl.sayHello();