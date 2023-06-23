describe("testes de soma", () => {
  const result = (num: number) => {
    const soma = num + num;
    if (soma === 2) {
      return true;
    }
    return false;
  };

  test("deve retornar true se 1 + 1 = 2", () => {
    expect(result(1)).toBeTruthy();
  });

  test("deve retornar false se 4 + 4 = 2", () => {
    expect(result(4)).toBeFalsy();
  });
});
