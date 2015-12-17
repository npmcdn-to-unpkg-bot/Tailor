System.register(['angular2/core', './assets.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, assets_service_1;
    var AssetsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (assets_service_1_1) {
                assets_service_1 = assets_service_1_1;
            }],
        execute: function() {
            AssetsComponent = (function () {
                function AssetsComponent(_assetsService) {
                    var _this = this;
                    this._assetsService = _assetsService;
                    _assetsService.getAssets()
                        .subscribe(function (res) { return _this.assets = res; });
                }
                Object.defineProperty(AssetsComponent.prototype, "diagnostic", {
                    get: function () { return JSON.stringify(this.assets); },
                    enumerable: true,
                    configurable: true
                });
                AssetsComponent = __decorate([
                    core_1.Component({
                        selector: 'assets',
                        template: "\n\uFEFF\n      {{diagnostic}}\n      <div class=\"container\">\n          <div class=\"page-header\"><h1>Runners</h1></div>\n          <div class=\"panel panel-default\">\n              <!-- Default panel contents -->\n              <div class=\"panel-heading\">Our Top Runners</div>\n              <div class=\"panel-body\">\n                  <p>Here is an example of the runners that you will see on the trails in our area.</p>\n              </div>\n\n              <!-- Table -->\n              <table class=\"table\">\n                  <thead>\n                  <tr>\n                      <th>#</th>\n                      <th>MSN</th>\n                  </tr>\n                  </thead>\n                  <tbody *ngFor=\"#asset of assets\" >\n                      <tr>\n                          <th scope=\"row\">{{asset.Id}}</th>\n                          <td>{{asset.Msn}}</td>\n                      </tr>\n                  </tbody>\n              </table>\n          </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [assets_service_1.AssetService])
                ], AssetsComponent);
                return AssetsComponent;
            })();
            exports_1("AssetsComponent", AssetsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3NldHMvYXNzZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJBc3NldHNDb21wb25lbnQiLCJBc3NldHNDb21wb25lbnQuY29uc3RydWN0b3IiLCJBc3NldHNDb21wb25lbnQuZGlhZ25vc3RpYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBb0NJQSx5QkFBb0JBLGNBQTRCQTtvQkFwQ3BEQyxpQkEyQ0NBO29CQVB1QkEsbUJBQWNBLEdBQWRBLGNBQWNBLENBQWNBO29CQUM1Q0EsY0FBY0EsQ0FBQ0EsU0FBU0EsRUFBRUE7eUJBQ3JCQSxTQUFTQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxHQUFHQSxFQUFqQkEsQ0FBaUJBLENBQUNBLENBQUNBO2dCQUM3Q0EsQ0FBQ0E7Z0JBRURELHNCQUFJQSx1Q0FBVUE7eUJBQWRBLGNBQW1CRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTs7O21CQUFBRjtnQkF6QzVEQTtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFFBQVFBLEVBQUVBLHcvQkE2QlRBO3FCQUNKQSxDQUFDQTs7b0NBV0RBO2dCQUFEQSxzQkFBQ0E7WUFBREEsQ0EzQ0EsQUEyQ0NBLElBQUE7WUEzQ0QsNkNBMkNDLENBQUEiLCJmaWxlIjoiYXBwL2Fzc2V0cy9hc3NldHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Fzc2V0U2VydmljZX0gZnJvbSAnLi9hc3NldHMuc2VydmljZSc7XG5pbXBvcnQge0Fzc2V0fSBmcm9tICcuL2Fzc2V0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhc3NldHMnLFxuICAgIHRlbXBsYXRlOiBgXG7vu79cbiAgICAgIHt7ZGlhZ25vc3RpY319XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+PGgxPlJ1bm5lcnM8L2gxPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgIDwhLS0gRGVmYXVsdCBwYW5lbCBjb250ZW50cyAtLT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5PdXIgVG9wIFJ1bm5lcnM8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgIDxwPkhlcmUgaXMgYW4gZXhhbXBsZSBvZiB0aGUgcnVubmVycyB0aGF0IHlvdSB3aWxsIHNlZSBvbiB0aGUgdHJhaWxzIGluIG91ciBhcmVhLjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPCEtLSBUYWJsZSAtLT5cbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPk1TTjwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0Ym9keSAqbmdGb3I9XCIjYXNzZXQgb2YgYXNzZXRzXCIgPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e3thc3NldC5JZH19PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7YXNzZXQuTXNufX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBc3NldHNDb21wb25lbnQge1xuICAgIHB1YmxpYyBhc3NldHM6IEFycmF5PEFzc2V0PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Fzc2V0c1NlcnZpY2U6IEFzc2V0U2VydmljZSkge1xuICAgICAgICBfYXNzZXRzU2VydmljZS5nZXRBc3NldHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5hc3NldHMgPSByZXMpO1xuICAgIH1cblxuICAgIGdldCBkaWFnbm9zdGljKCkgeyByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5hc3NldHMpOyB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=