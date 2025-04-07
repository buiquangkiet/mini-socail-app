import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
	  maxAge: 15 * 24 * 60 * 60 * 1000, //MS
	  httpOnly: true, // prevent XSS attacks
	  sameSite: "lax", // Allow cookies in cross-site requests
	  secure: false, // Allow non-HTTPS in development
	});
};
