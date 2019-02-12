const { transport } = require( './tranport' );
const { email } = require( './email' );



const SHIFT = 2;
const user    = process.argv[ SHIFT + 0 ];  // first argument
const pass    = process.argv[ SHIFT + 1 ];  // second argument
const from    = process.argv[ SHIFT + 0 ];  // first argument
const   to    = process.argv[ SHIFT + 2 ];  // third argument
const subject = process.argv[ SHIFT + 3 ];  // fourth argument
const    html = process.argv[ SHIFT + 4 ];  // fifth argument

( async ( transport ) =>
{
    const info = await email( transport, { to, from, html, subject });

    console.log( info );
})( transport({ user, pass }) )
.then( error =>
{
    console.error( error );
});
