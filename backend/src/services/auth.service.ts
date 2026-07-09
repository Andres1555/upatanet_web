import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { envConfig } from '../config';


//por ahora no toquen esta vaina que lo tengo que rearmar
export class AuthService {
  async register(userData: { email: string; password: string; name: string; role?: string }) {
    // TODO: Verificar si el usuario ya existe en la BD
    const hashedPassword = await bcrypt.hash(userData.password, 12);

    // TODO: Guardar usuario en la BD
    const newUser = {
      id: Date.now().toString(), // Placeholder - usar UUID real
      email: userData.email,
      name: userData.name,
      role: userData.role || 'user',
      createdAt: new Date(),
    };

    const token = this.generateToken(newUser.id);

    return { user: newUser, token };
  }

  async login(credentials: { email: string; password: string }) {
    // TODO: Buscar usuario en la BD por email
    // TODO: Comparar contraseñas con bcrypt.compare()
    // Placeholder
    const token = this.generateToken('user-id');
    return { token };
  }

  async getProfile(userId: string) {
    // TODO: Buscar usuario en la BD por ID
    return { id: userId, message: 'Implementar búsqueda en BD' };
  }

  private generateToken(userId: string): string {
    return jwt.sign({ userId }, envConfig.jwt.secret, { expiresIn: envConfig.jwt.expiresIn } as jwt.SignOptions);
  }
}
