export const formatCurrency = (value, options = {}) => {
	const {
		currency = 'KES',
		decimalPlaces = 2,
		compact = false,
		showSign = false,
		isExpense = false,
	} = options;

	const displayValue = isExpense ? -Math.abs(value) : value;

	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
		minimumFractionDigits: decimalPlaces,
		maximumFractionDigits: decimalPlaces,
		notation: compact ? 'compact' : 'standard',
		signDisplay: showSign ? 'always' : 'auto',
	}).format(displayValue);
};
