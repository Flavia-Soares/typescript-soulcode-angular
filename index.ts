interface UserProps{
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    senha: string,
    cpf: string,
    contact: string,
    isAdmin: boolean
}

class User implements UserProps{
    firstName: string =  '';
    lastName: string=  '';
    userName: string=  '';
    email: string=  '';
    senha: string=  '';
    cpf: string=  '';
    contact: string=  '';
    isAdmin: boolean= false;

    constructor(
        firstName: string,
        lastName: string,
        userName: string,
        email: string,
        senha: string,
        cpf: string,
        contact: string,
        isAdmin: boolean   
    ){
        this.firstName = firstName
        this.lastName = lastName
        this.userName = userName
        this.email = email
        this.senha = senha
        this.cpf = cpf
        this.contact = contact
        this.isAdmin = isAdmin
    }

    getFirstName(): string{
        return this.firstName
    }

    setFirstName(firstName: string): void{
        this.firstName = firstName
    }

    getLastName(): string{
        return this.lastName
    }

    setLastName(lastName: string): void{
        this.lastName = lastName
    }

    getUserName(): string{
        return this.userName
    }

    setUserName(userName: string): void{
        this.userName = userName
    }
    getEmail(): string{
        return this.email
    }

    setEmail(email: string): void{
        this.email = email
    }

    getSenha(): string{
        return this.senha
    }

    setSenha(senha: string): void{
        this.senha = senha
    }

    getCpf(): string{
        return this.cpf
    }

    setCpf(cpf: string): void{
        this.cpf = cpf
    }

    getContact(): string{
        return this.contact
    }

    setContact(contact: string): void{
        this.contact = contact
    }

    getIsAdmin(): boolean {
        return this.isAdmin
    }
    
    setIsAdmin(isAdmin: boolean) {
        this.isAdmin = isAdmin
    }

    toString(): string {
        return JSON.stringify(this)
    }
}

const user = new User('Flavia', 'Soares', 'flavia123', 'flaviasoaresds@gmail.com', '1234', '06576307489','81945785411' true)
console.log (user.toString())