angular.module('templates-aqb', ['directives/search-condition.tpl.html', 'directives/search-group.tpl.html']);

angular.module("directives/search-condition.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/search-condition.tpl.html",
    "<form class=\"form-inline aqb-search-condition\" name=\"searchConditionForm\">\n" +
    "    <select ng-change=\"selectSourceField()\"\n" +
    "            ng-model=\"selectedSourceField\"\n" +
    "            ng-class=\"searchConditionForm.$submitted && searchConditionForm.sourceField.$error.required ? 'input-error' : ''\"\n" +
    "            ng-options=\"f.displayName for f in sourceType.sourceFields | orderBy:'position'\" required></select>\n" +
    "\n" +
    "    <select ng-change=\"selectComparisonOperator()\"\n" +
    "            ng-model=\"selectedComparisonOperator\"\n" +
    "            ng-class=\"searchConditionForm.$submitted && searchConditionForm.comparisonOperator.$error.required ? 'input-error' : ''\"\n" +
    "            ng-options=\"o.displayName for o in selectedSourceField.comparisonOperators | orderBy:'position'\" required></select>\n" +
    "\n" +
    "    <input type=\"text\"\n" +
    "           id=\"{{searchConditionInputItemId}}\"\n" +
    "           ng-model=\"inputItem.displayName\"\n" +
    "           ng-class=\"searchConditionForm.$submitted && searchConditionForm.inputItem.$error.required ? 'input-error' : ''\" required>\n" +
    "\n" +
    "    <button class=\"btn\" type=\"submit\" ng-click=\"addCondition(searchConditionForm, $event)\" ng-show=\"canAddCondition(conditionIndex)\"><i class=\"icon-plus-sign\"></i></button>\n" +
    "    <button class=\"btn\" type=\"button\" ng-click=\"removeCondition(conditionIndex)\" ng-show=\"canRemoveCondition(conditionIndex)\"><i class=\"icon-minus-sign\"></i></button>\n" +
    "</form>");
}]);

angular.module("directives/search-group.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/search-group.tpl.html",
    "<div class=\"aqb-search-group\">\n" +
    "    <div class=\"aqb-search-group-head\">\n" +
    "        <div ng-show=\"sourceTypes.length > 1\">\n" +
    "            <div class=\"aqb-nav-pills-container\">\n" +
    "                <ul class=\"nav nav-pills\">\n" +
    "                    <li ng-repeat=\"type in sourceTypes | orderBy:'position'\" ng-class=\"type.name == selectedSourceType.name ? 'active' : ''\">\n" +
    "                        <a href=\"javascript:void(0)\" ng-click=\"selectSourceType(type)\">{{type.displayName}}</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <div class=\"vertical-divider\"></div>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <div class=\"aqb-nav-pills-container\">\n" +
    "                <ul class=\"nav nav-pills\">\n" +
    "                    <li ng-repeat=\"operator in logicalOperators | orderBy:'position'\" ng-class=\"operator.name == selectedLogicalOperator.name ? 'active' : ''\">\n" +
    "                        <a href=\"javascript:void(0)\" ng-click=\"selectLogicalOperator(operator)\">{{operator.displayName}}</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <div class=\"vertical-divider\"></div>\n" +
    "        </div>\n" +
    "        <button class=\"btn\" type=\"button\" ng-click=\"addGroup()\" ng-show=\"canAddGroup()\"><i class=\"icon-plus-sign\"></i></button>\n" +
    "        <button class=\"btn\" type=\"button\" ng-click=\"removeGroup()\" ng-show=\"canRemoveGroup()\"><i class=\"icon-minus-sign\"></i></button>\n" +
    "    </div>\n" +
    "    <div class=\"horizontal-divider\"></div>\n" +
    "    <div class=\"aqb-search-group-body\">\n" +
    "        <div class=\"animate-combined\" ng-repeat=\"condition in group.conditions | orderBy:'index'\">\n" +
    "            <div search-condition\n" +
    "                 condition=\"condition\"\n" +
    "                 condition-index=\"$index\"\n" +
    "                 source-type=\"selectedSourceType\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"animate-combined\" ng-repeat=\"innerGroup in group.groups | orderBy:'index'\">\n" +
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
