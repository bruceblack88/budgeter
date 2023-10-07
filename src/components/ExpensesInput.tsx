
function ExpensesInput({ formData, handleInputChange }) {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Expenses:</h2>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="housing">
                    Housing:
                </label>
                <input
                    type="number"
                    name="housing"
                    id="housing"
                    placeholder="0.00"
                    value={formData.housing}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="utilities">
                    Utilities:
                </label>
                <input
                    type="number"
                    name="utilities"
                    id="utilities"
                    placeholder="0.00"
                    value={formData.utilities}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            {/* ... Add similar fields for Transportation, Groceries, etc. */}
        </div>
    );
}

export default ExpensesInput;
