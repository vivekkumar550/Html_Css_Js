function Cylinder(cyl_h, cyl_dia) {
    this.cyl_h = cyl_h;
    this.cyl_dia = cyl_dia;
}
Cylinder.prototype.Volume = function () {
    var radius = this.cyl_dia / 2;
    return this.cyl_h * Math.PI * radius * radius;
};
var cyl = new Cylinder(8, 5);
console.log('Volume=', cyl.Volume())