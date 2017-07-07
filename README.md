# rrso-calculator
Kalkulator Rzeczywistej Rocznej Stopy Procentowej

## Usage

Borrow 1500$ for 8 months with 10% interest rate: 

```
const amount = 1500;
const months = 8;
const days = 0;
const config = {
  interest: 0.10,
  commission: 0
};

RRSO.getSimpleResult(amount, months, days, config);
```

Borrow 500$ for 20 days with 10% interest rate and 20% commision: 

```
const amount = 500;
const months = 0;
const days = 20;
const config = {
  interest: 0.10,
  commission: 0.20
};

RRSO.getSimpleResult(amount, months, days, config);
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