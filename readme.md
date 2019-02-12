# node-email

A node script made to learn nodemailer.

## Download

```bash
$ git clone https://github.com/SalathielGenese/node-email.git
$ cd node-email
$ yarn install
```

Or...

```bash
$ yarn add https://github.com/SalathielGenese/node-email.git
```

## Setup

I have tested it with Gmail. So if you have a Gmail account, [head over here](https://myaccount.google.com/lesssecureapps) and **allow less secure apps**.

## Send mail

### CLI

```bash
$ node . ${YOUR_EMAIL} ${YOUR_PASSWORD} ${RECIPIENT} ${SUBJECT} ${EMAIL_MARKUP}
```

### Javascript

```js
import { transport } from 'node-email/src/transport';
import { email } from 'node-email/src/email';



email( transport( user, pass ), { to, from, html, subject })
    .then( info => console.log( info ) )
    .catch( error => console.error( error ) );
```

## Credit

Many thanks to [Manoj Singh Negi](https://codeburst.io/@manojsinghnegi) for
[his successful article](https://codeburst.io/sending-an-email-using-nodemailer-gmail-7cfa0712a799)
because, YES, I tried a douzen of them and failed. I found his article the next day!

## Licence

MIT
