import bcrypt from 'bcrypt';
import authRepository from 'repository/auth.repository';

export async function signUp({email, password, name}) {
    const hashPassword = await bcrypt.hash(password, 10);

    return authRepository.create({
        email,
        password: hashPassword,
        name,
    });
}

const authService = {
    signUp,
}

export default authService;