import bcrypt from "bcrypt";

export async function compareHash(plainText: string, hashedText: string) {
    return await bcrypt.compare(plainText, hashedText);
}