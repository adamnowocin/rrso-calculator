# rrso-calculator
Kalkulator Rzeczywistej Rocznej Stopy Procentowej

## Usage

Borrow 1500 PLN for 8 months with 1.5% interest rate and 10% commission: 

```
const amount = 1500;
const installments = 8;
const interestRate = 1.5,
const commission = 10;

RRSO.calculate(amount, interestRate, installments, commision, 0);
```

## Building

```
npm run build
```

## Testing

```
npm run test
```

## License

**rrso-calculator** is licensed under the [MIT license](http://opensource.org/licenses/MIT).
For the full license, see the `LICENSE` file.