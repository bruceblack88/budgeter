
function IncomeInput({ formData, handleInputChange }) {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Income:</h2>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="monthlySalary">
                    Monthly Salary/Wages:
                </label>
                <input
                    type="number"
                    name="monthlySalary"
                    id="monthlySalary"
                    placeholder="0.00"
                    value={formData.monthlySalary}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            {/* ... Add similar fields for Side Income, Interest/Dividends, etc. */}
        </div>
    );
}

export default IncomeInput;

