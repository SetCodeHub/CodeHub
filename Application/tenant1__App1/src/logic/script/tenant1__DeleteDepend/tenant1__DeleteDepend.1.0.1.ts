// Here's your code.
import * as db from 'db';
let cond = {
    conjunction: db.Conjunction.AND,
    conditions: [
        {
            field: "PackageId",
            operator: db.Operator.eq,
            value: "003G000001601vrjsuK8",
        }
    ]
};
db.setup("PackageContent").deleteByCondition(cond)