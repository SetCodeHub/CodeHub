/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2012-2019. All rights reserved.
 * 
 */
import * as flow from 'flow';
/*
 * The input parameter is defined by `@action.param()`.
 */
export class Input {

}

/*
 * The output parameter is defined by `@action.param()`.
 */
export class Output {
    @action.param({ type: "String", required: true })
    result: string;
}

/*
 * Define the main service class.
 * 
 * - The service entry function is defined by `@action.method()`.
 * - All dependent objects should be defined via `@useObject([])` (for objects) or `@useBo([])` (for business objects).
 */
export class Calculator {

    @action.method({ input: "Input", output: "Output", description: "do a operation" })
    run(input: Input): Output {
        let output = new Output();
        let mng = flow.newManager()
        let flow0 = mng.getById("000y00000163JI66G5Fg");
        flow0.name = "test3";
        let data = mng.createFlow(flow0);
        console.log(data);
        output.result = data.ID;
        return output;
    }
}