"use strict";
var Employee = (function () {
    function Employee(Id, CardNo, FirstName, LastName, HourRate, HourPerDay, Checked) {
        this.Id = Id;
        this.CardNo = CardNo;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.HourRate = HourRate;
        this.HourPerDay = HourPerDay;
        this.Checked = Checked;
    }
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map