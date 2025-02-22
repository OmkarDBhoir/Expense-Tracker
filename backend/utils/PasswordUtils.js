const bcrypt = require('bcrypt');

class PasswordUtils {
    static saltRounds = 10;
    

    /**
   * Hashes a plain text password.
   * @param {string} plainPassword - The password to hash.
   * @returns {Promise<string>} - A promise that resolves to the hashed password.
   */

    static async hashPassword(plainPassword)  {
        try {
            const salt = await bcrypt.genSalt(PasswordUtils.saltRounds);
            const hashedPassword = await bcrypt.hash(plainPassword, salt);
            return  hashedPassword;
        } catch (error) {
            console.error("Error hashing password", error);
            throw new Error("Hashing Failed");
        }
    }


    /**
   * Compares a plain text password with a hashed password.
   * @param {string} plainPassword - The plain text password.
   * @param {string} hashedPassword - The hashed password.
   * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating if the passwords match.
   */

    static async comparePassword(plainPassword, hashedPassword) {
        try {
            return await bcrypt.compare(plainPassword, hashedPassword);
        } catch (error) {
            console.error("Error comparing password: ", error);
            throw new error('Comparison failed');
        }
    }
}

module.exports = PasswordUtils;