# WORK IN PROGRESS

# rrso-calculator
Kalkulator Rzeczywistej Rocznej Stopy Procentowej

## Usage

### Interface
```
RRSO.getSimpleResult(amount, months, days?, config?);
```

## Example

Borrow 1500$ for 8 months with 10% interest rate: 

```
const config = {
  intrest: 0.10,
  commission: 0
};
RRSO.getSimpleResult(1500, 8, 0, config);
```

Borrow 500$ for 20 days with 10% interest rate and 20% commision: 

```
const config = {
  intrest: 0.10,
  commission: 0.20
};
RRSO.getSimpleResult(500, 0, 20, config);
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