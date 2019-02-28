import { MeumoduleModule } from './meumodule.module';

describe('MeumoduleModule', () => {
  let meumoduleModule: MeumoduleModule;

  beforeEach(() => {
    meumoduleModule = new MeumoduleModule();
  });

  it('should create an instance', () => {
    expect(meumoduleModule).toBeTruthy();
  });
});
