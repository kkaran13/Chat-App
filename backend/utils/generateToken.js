import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in Mili Seconds
        httpOnly: true,                   // prevent XSS 
        sameSite: "strict",               // CSRF
        secure: process.env.Node_env !== "development"
    })
}

export default generateTokenAndSetCookie;