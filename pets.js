const data = [
  {
    id: 1,
    nome: "Capitu",
    idade: 15,
    sexo: "F",
    especie: "Calopsita",
  },
  {
    id: 2,
    nome: "Bentinho",
    idade: 5,
    sexo: "M",
    especie: "Cachorro",
  },
];

function listar() {
  return data;
}

function listarPorId(id) {
  const pet = data.find((pet) => pet.id === id);
  if (!pet) {
    return {
      erro: true,
      mensagem: "Pet não encontrado!",
    };
  }
  return pet;
}

function cadastrar(pet) {
  pet.id = data.length + 1;
  data.push(pet);

  if (!pet.nome) {
    return {
      erro: true,
      mensagem: "Campo 'nome' é obrigatório!",
    };
  }
  if (!pet.idade) {
    return {
      erro: true,
      mensagem: "Campo 'idade' é obrigatório!",
    };
  }
  if (!pet.sexo) {
    return {
      erro: true,
      mensagem: "Campo 'sexo' é obrigatório!",
    };
  }
  if (!pet.especie) {
    return {
      erro: true,
      mensagem: "Campo 'especie' é obrigatório!",
    };
  }
  if (pet.idade < 0) {
    return {
      erro: true,
      mensagem: "Campo 'idade' deve ser maior ou igual a zero!",
    };
  }
  if (pet.sexo != "M" && pet.sexo != "F") {
    return {
      erro: true,
      mensagem: "Campo 'sexo' deve ser 'M' ou 'F'!",
    };
  }
  return pet;
}

function editarPorId(id, pet) {
  const index = data.find((pet) => pet.id === id);

  if (!index) {
    return {
      erro: true,
      mensagem: "Pet não encontrado!",
    };
  }
  if (pet.idade < 0) {
    return {
      erro: true,
      mensagem: "Campo 'idade' deve ser maior ou igual a zero!",
    };
  }
  if (pet.sexo != "M" && pet.sexo != "F") {
    return {
      erro: true,
      mensagem: "Campo 'sexo' deve ser 'M' ou 'F'!",
    };
  }

  if (pet.nome) index.nome = pet.nome;
  if (pet.idade) index.idade = pet.idade;
  if (pet.especie) index.especie = pet.especie;
  if (pet.sexo) index.sexo = pet.sexo;

  return index;
}

function deletarPorId(id) {
  const index = data.findIndex((pet) => pet.id === id);

  if(index > -1) {
      data.splice(index, 1);
      return {
        erro: false,
        mensagem: "Pet deletado com sucesso!" 
      }
  }
  
  if (!index.id)
  return {
      erro: true,
      mensagem: "Pet não encontrado!",
    };
    
  return index;
}


module.exports = {
  listar,
  listarPorId,
  cadastrar,
  editarPorId,
  deletarPorId,
  
};
