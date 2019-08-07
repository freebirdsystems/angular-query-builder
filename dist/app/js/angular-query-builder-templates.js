angular.module('templates-aqb', ['directives/search-condition.tpl.html', 'directives/search-group.tpl.html']);

angular.module("directives/search-condition.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("directives/search-condition.tpl.html",
    "<div class=\"form-inline aqb-search-condition\" name=\"searchConditionForm\" novalidate>\n" +
    "    <div class=\"form-group\">\n" +
    "      <select name=\"sourceField\"\n" +
    "            placeholder=\"Alan Seçiniz\"\n" +
    "            class=\"form-control\"\n" +
    "            ng-change=\"selectSourceField()\"\n" +
    "            ng-model=\"selectedSourceField\"\n" +
    "            ng-class=\"searchConditionForm.$submitted && searchConditionForm.sourceField.$error.required ? 'aqb-input-error' : ''\"\n" +
    "            ng-options=\"f.label for f in sourceType.sourceFields | orderBy:'position'\">\n" +
    "              <option value='' disabled selected>Alan Seçiniz</option>\n" +
    "            </select>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <select name=\"comparisonOperator\"\n" +
    "              placeholder=\"Operatör Seçiniz\"\n" +
    "              class=\"form-control\"\n" +
    "              ng-change=\"selectComparisonOperator()\"\n" +
    "              ng-model=\"selectedComparisonOperator\"\n" +
    "              ng-class=\"searchConditionForm.$submitted && searchConditionForm.comparisonOperator.$error.required ? 'aqb-input-error' : ''\"\n" +
    "              ng-options=\"o.label for o in selectedSourceField.comparisonOperators | orderBy:'position'\">\n" +
    "                <option value='' disabled selected>Operatör Seçiniz</option>\n" +
    "              </select>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Type: Text -->\n" +
    "    <div class=\"form-group\" ng-if=\"selectedSourceField.type == 'text'\">\n" +
    "      <input name=\"inputItem\"\n" +
    "             placeholder=\"Değer Giriniz\"\n" +
    "             class=\"form-control\"\n" +
    "             type=\"text\"\n" +
    "             id=\"{{searchConditionInputItemId}}\"\n" +
    "             ng-model=\"inputItem.label\"\n" +
    "             ng-class=\"searchConditionForm.$submitted && searchConditionForm.inputItem.$error.required ? 'aqb-input-error' : ''\" \n" +
    "             autocomplete=\"off\">\n" +
    "    </div>\n" +
    "    <!-- /Type: Text -->\n" +
    "\n" +
    "    <!-- Type: Number -->\n" +
    "    <div class=\"form-group\" ng-if=\"selectedSourceField.type == 'number'\">\n" +
    "      <input name=\"inputItem\"\n" +
    "             placeholder=\"Değer Giriniz\"\n" +
    "             class=\"form-control\"\n" +
    "             type=\"number\"\n" +
    "             id=\"{{searchConditionInputItemId}}\"\n" +
    "             ng-model=\"inputItem.label\"\n" +
    "             ng-class=\"searchConditionForm.$submitted && searchConditionForm.inputItem.$error.required ? 'aqb-input-error' : ''\" \n" +
    "             autocomplete=\"off\">\n" +
    "    </div>\n" +
    "    <!-- /Type: Number -->\n" +
    "\n" +
    "    <!-- Type: Select -->\n" +
    "    <div class=\"form-group\" ng-if=\"selectedSourceField.type == 'select'\">\n" +
    "      <ui-select name=\"inputItem\" id=\"{{searchConditionInputItemId}}\" ng-model=\"inputItem.label\" theme=\"bootstrap\" style=\"min-width: 209px\">\n" +
    "        <ui-select-match placeholder=\"Seçiniz\">{{$select.selected.value}}</ui-select-match>\n" +
    "        <ui-select-choices repeat=\"item.key as item in selectedSourceField.options | filter: $select.search\">\n" +
    "        <div ng-bind-html=\"item.value | highlight: $select.search\"></div>\n" +
    "        </ui-select-choices>\n" +
    "      </ui-select>\n" +
    "    </div>\n" +
    "    <!-- /Type: Select -->\n" +
    "\n" +
    "    <!-- Type: AutoComplete -->\n" +
    "    <div class=\"form-group\" ng-if=\"selectedSourceField.type == 'autocomplete'\" cg-busy=\"indicatorPromise\">\n" +
    "            <ui-select ng-model=\"inputItem.label\" id=\"{{searchConditionInputItemId}}\" name=\"inputItem\" theme=\"bootstrap\" style=\"min-width: 209px\">\n" +
    "              <ui-select-match placeholder=\"Arayınız\">\n" +
    "                {{$select.selected.user.full_name}}\n" +
    "              </ui-select-match>\n" +
    "              <ui-select-choices refresh=\"getOptions(selectedSourceField, $select.search)\" refresh-delay=\"500\"\n" +
    "                repeat=\"o in selectedSourceField.options | filter: $select.search\">\n" +
    "                <div ng-bind-html=\"o.user.full_name | highlight: $select.search\"></div>\n" +
    "              </ui-select-choices>\n" +
    "            </ui-select>\n" +
    "    </div>\n" +
    "    <!-- /Type: AutoComplete -->\n" +
    "\n" +
    "\n" +
    "    <!-- Type: Date -->\n" +
    "    <div class=\"form-group\" ng-if=\"selectedSourceField.type == 'date'\">\n" +
    "        <input type=\"text\" name=\"inputItem\" id=\"{{searchConditionInputItemId}}\" class=\"form-control\"\n" +
    "            ng-model=\"inputItem.label\"\n" +
    "            placeholder=\"Seçiniz\"\n" +
    "             data-date-type=\"string\"\n" +
    "            data-date-format=\"dd.MM.yyyy\"\n" +
    "            data-model-date-format=\"yyyy-MM-dd\"\n" +
    "            data-autoclose=\"1\"\n" +
    "            bs-datepicker>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- /Type: Date -->\n" +
    "\n" +
    "    <button class=\"btn btn-sm\" type=\"button\" ng-click=\"addCondition(searchConditionForm)\" ng-if=\"canAddCondition(conditionIndex)\">\n" +
    "      <i class=\"mdi-content-add-circle i-16\"></i>\n" +
    "    </button>\n" +
    "    <button class=\"btn btn-sm\" type=\"button\" ng-click=\"removeCondition(conditionIndex)\">\n" +
    "      <i class=\"mdi-content-remove-circle i-16\"></i>\n" +
    "    </button>\n" +
    "</div>");
}]);

angular.module("directives/search-group.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("directives/search-group.tpl.html",
    "<div class=\"aqb-search-group\">\n" +
    "    <div class=\"aqb-search-group-head\">\n" +
    "        <div ng-show=\"sourceTypes.length > 1\">\n" +
    "            <div class=\"aqb-nav-pills-container\">\n" +
    "                <ul class=\"nav nav-pills nav-sm\">\n" +
    "                    <li ng-repeat=\"type in sourceTypes | orderBy:'position'\" ng-class=\"type.name == selectedSourceType.name ? 'active' : ''\">\n" +
    "                        <a href=\"javascript:void(0)\" ng-click=\"selectSourceType(type)\">{{type.label}}</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <div class=\"aqb-vertical-divider\"></div>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <div class=\"aqb-nav-pills-container\">\n" +
    "                <ul class=\"nav nav-pills nav-sm\">\n" +
    "                    <li ng-repeat=\"operator in logicalOperators | orderBy:'position'\" ng-class=\"operator.name == selectedLogicalOperator.name ? 'active' : ''\">\n" +
    "                        <a href=\"javascript:void(0)\" ng-click=\"selectLogicalOperator(operator)\">{{operator.label}}</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <div class=\"aqb-vertical-divider\"></div>\n" +
    "        </div>\n" +
    "        <button class=\"btn btn-sm pull-left\" type=\"button\" ng-click=\"addGroup()\" ng-show=\"canAddGroup()\">\n" +
    "            <i class=\"mdi-content-add-circle i-16\"></i>\n" +
    "            Grup Ekle\n" +
    "        </button>\n" +
    "        <button class=\"btn btn-sm pull-left m-l-sm\" type=\"button\" ng-click=\"removeGroup()\" ng-show=\"canRemoveGroup()\">\n" +
    "            <i class=\"mdi-content-remove-circle i-16\"></i>\n" +
    "            Grup Sil\n" +
    "        </button>\n" +
    "        <button class=\"btn pull-left\" type=\"button\" ng-click=\"addCondition()\" ng-show=\"group.conditions.length < 1\"><i class=\"icon-plus-sign\"></i> Durum Ekle</button>\n" +
    "        <div class=\"row m-l pull-left\" style=\"margin-top: 5px;\" ng-if=\"!canRemoveGroup()\">\n" +
    "          <label class=\"radio-inline\">\n" +
    "            <input type=\"radio\" ng-model=\"personalType\" name=\"personalType\" value=\"active\" ng-click=\"changeActive({status:'active'})\" checked=\"\"> \n" +
    "            Aktif\n" +
    "          </label>\n" +
    "          <label class=\"radio-inline\">\n" +
    "            <input type=\"radio\" ng-model=\"personalType\" name=\"personalType\" value=\"inactive\" ng-click=\"changeActive({status:'inactive'})\"> \n" +
    "            Pasif\n" +
    "          </label>\n" +
    "          <label class=\"radio-inline\">\n" +
    "            <input type=\"radio\" ng-model=\"personalType\" name=\"personalType\" value=\"all\" ng-click=\"changeActive({status:'all'})\"> \n" +
    "            Tümü\n" +
    "          </label>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"aqb-horizontal-divider\"></div>\n" +
    "    <div class=\"aqb-search-group-body\">\n" +
    "        <div class=\"aqb-animate-combined\" ng-repeat=\"condition in group.conditions | orderBy:'index'\">\n" +
    "            <div search-condition\n" +
    "                 condition=\"condition\"\n" +
    "                 condition-index=\"$index\"\n" +
    "                 source-type=\"selectedSourceType\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"aqb-animate-combined\" ng-repeat=\"innerGroup in group.groups | orderBy:'index'\">\n" +
    "            <div search-group\n" +
    "                 search-container=\"searchContainer\"\n" +
    "                 groups=\"group.groups\"\n" +
    "                 group-index=\"$index\"\n" +
    "                 source-types=\"sourceTypes\"\n" +
    "                 logical-operators=\"logicalOperators\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
