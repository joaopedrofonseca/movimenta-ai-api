import bcrypt from 'bcrypt';
import authRepository from '../repository/auth.repository.js';

export async function signUp({email, password, name}) {
    const hashPassword = await bcrypt.hash(password, 10);

    await authRepository.create({
        email,
        senha: hashPassword,
        nome: name,
    });
}

export async function SignIn({email, password}) {
    
}

const authService = {
    signUp,
}

export default authService;