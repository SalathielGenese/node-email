const nodemailer = require( 'nodemailer' );



const transport = ({ user, pass }) =>
{
    return nodemailer.createTransport({
        auth : { user, pass },
        service,
    });
}

const service = 'gmail';




module.exports = {
    transport,
};
