const pessoa = {
    nome: "Diego",
    sobrenome: "Stiehl",
  };
  
  console.log(pessoa);
  
  console.log(pessoa.nome);
  console.log(`Nome completo: ${pessoa.nome} ${pessoa.sobrenome}`);
  
  console.log(pessoa["nome"]);
  console.log(`Nome completo: ${pessoa["nome"]} ${pessoa["sobrenome"]}`);
  
  // const parcial = "sobre";
  const parcial = "";
  const atributoMostrar = `${parcial}nome`;
  
  console.log(
    `Valor do atributo '${atributoMostrar}': ${pessoa[atributoMostrar]}`
  );
  
  console.log(pessoa.abc);
  
  ////////////////////////////////
  
  const cao = {
    nome: "Fritz",
    idade: 6,
    dono: pessoa,
    veterinario: {
      nome: "Dr. Pedro",
      especialidade: "Pediatria canina",
    },
    alimentosFavoritos: ["Carne", "Bifinho", "Cenoura"],
  };
  
  console.log(cao);
  console.log(cao.dono.sobrenome);
  
  pessoa.sobrenome = "Maradona";
  
  console.log(cao);
  console.log(cao.dono.sobrenome);
  
  console.log(cao.alimentosFavoritos);
  console.log(`Lista alimentar do ${cao.nome}:`);
  for (const alimento of cao.alimentosFavoritos) {
    console.log(`Alimento: ${alimento}`);
  }
  
  ////////////////////////////////
  
  const veiculo = {
    modelo: "Fusca",
    marca: "VW",
  };
  
  console.log(veiculo.modelo);
  console.log(`Ano: ${veiculo.ano}`);
  
  veiculo.ano = 1965;
  
  console.log(veiculo.modelo);
  console.log(`Ano: ${veiculo.ano}`);
  console.log(veiculo);
  
  veiculo.ano = 1970;
  
  console.log(`Ano: ${veiculo.ano}`);
  console.log(veiculo);
  