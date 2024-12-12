# checkout_with_stripe_Magnet_Brains

This package allows [Stripe.js](https://stripe.com/docs/stripe-js) to be
imported as a CommonJS module or ES module.

**Note**: To be
[PCI compliant](https://stripe.com/docs/security/guide#validating-pci-compliance),
you must load Stripe.js directly from `https://js.stripe.com`. You cannot
include it in a bundle or host it yourself. This package wraps the global
`Stripe` function provided by the Stripe.js script as an ES module.

Calling `loadStripe` always loads the latest version of Stripe.js, regardless of
which version of `@stripe/stripe-js` you use. Updates for this package only
impact tooling around the `loadStripe` helper itself and the TypeScript type
definitions provided for Stripe.js. Updates do not affect runtime availability
of features of Stripe.js.

## Minimum requirements

- Node.js:v18.18.0

## Technology Stack

| Component      | Technology              |
|----------------|-------------------------|
| Frontend       | React.js, css     |
| Backend        | Node.js, Express.js     |
| Database       | MongoDB                 |
| Styling        | CSS         |

---


## Installation

### Clone the Repository
```bash
git clone <()>
cd client
cd task management system

### Install Dependencies
Run the following command to install all required dependencies:

npm install


Use `npm` to install the Stripe.js module:

```sh
npm install @stripe/stripe-js
```

## Usage

### `loadStripe`

This function returns a `Promise` that resolves with a newly created `Stripe`
object once Stripe.js has loaded. It takes the same parameters passed when
directly
[initializing a `Stripe` instance](https://stripe.com/docs/js/initializing). If
necessary, it will load Stripe.js for you by inserting the Stripe.js script tag.
If you call `loadStripe` in a server environment it will resolve to `null`.

```js
import {loadStripe} from '@stripe/stripe-js';

const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
```

I’ve placed a random API key in this example. Replace it with your
[actual publishable API keys](https://dashboard.stripe.com/account/apikeys) to
test this code through your Stripe account.

For more information on how to use Stripe.js, please refer to the
[Stripe.js API reference](https://stripe.com/docs/js) or learn to
[accept a payment](https://stripe.com/docs/payments/accept-a-payment) with
Stripe.



### Import as a side effect

Import `@stripe/stripe-js` as a side effect in code that will be included
throughout your site (e.g. your root module). This will make sure the Stripe.js
script tag is inserted immediately upon page load.

```js
import '@stripe/stripe-js';
```

## Stripe.js Documentation

- [Stripe.js Docs](https://stripe.com/docs/stripe-js)
- [Stripe.js Reference](https://stripe.com/docs/js)
- [React Stripe.js Docs](https://stripe.com/docs/stripe-js/react)
