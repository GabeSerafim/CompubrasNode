module.exports = class Cliente {
    constructor(codCliente, nome, endereco, cidade, cep, uf, iE){
        this.codCliente = codCliente;
        this.nome = nome;
        this.endereco = endereco;
        this.cidade = cidade;
        this.cep = cep;
        this.uf = uf;
        this.iE = iE;
    }

    save(){
        return db.execute("INSERT INTO cliente (nome, endereco, cidade, cep, uf, iE) VALUES (?, ?, ?, ?, ?, ?)",
        [this.nome, this.endereco, this.cidade, this.cep, this.uf, this.iE])
    }

    static deleteById(id){

    }

    static fetchAll(){
        return db.execute("SELECT * FROM cliente")
    }

    static getById(id){
        return db.execute("SELECT * FROM cliente WHERE cliente.codCliente = ?",
        [id])
    }
}