import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('shloud accept values in the constructor', () =>{
    let todo = new Todo({
      title: 'HOLA',
      complete: true
    });
    expect(todo.title).toEqual('HOLA');
    expect(todo.complete).toEqual(true);
  });
});
