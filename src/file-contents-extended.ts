import { IInput } from './input';

export class FileContentsExtended {

    private camelCase (input: string): string {
        return input.replace( /-([a-z])/ig, function( all, letter ) {
            return letter.toUpperCase();
        });
    }

    private inputUpperCase(inputName: string): string {
        let inputUpperCase: string = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);
        return inputUpperCase;
    }

    public componentContent(inputName:string): string {
        var inputUpperCase: string = this.inputUpperCase(inputName);
        
        var componentContent: string = "import { Component, OnInit, Input, Output } from '@angular/core';\n\n" +
            "import { " + inputUpperCase + " } from './shared/" + inputName + ".model';\n" +
            "import { " + inputUpperCase + "Service } from './shared/" + inputName + ".service';\n" +
            "\n" +
            "@Component({\n" +
            "\tmoduleId: module.id,\n" +
            "\tselector: '" + inputName + "',\n" +
            "\tstyleUrls:['" + inputName + ".component.css'],\n" +
            "\ttemplateUrl: '" + inputName + ".component.html',\n" +
            "})\n" +
            "\n" +
            "export class " + inputUpperCase + "Component implements OnInit {\n" +
            "\t"+ inputUpperCase +": "+ inputUpperCase +"[] = [];\n" +
            "\n" +
            "\tconstructor(private " + inputUpperCase + "Service: " + inputUpperCase + "Service) { }\n" +
            "\n" +
            "\tngOnInit() {\n" +
            "\t\tthis."+ inputUpperCase + "Service.getList().subscribe((res) => {\n" +
            "\t\t\tthis."+ inputUpperCase +" = res;\n" +
            "\t\t});\n" +
            "\t}\n" +
            "}";
        return componentContent;
    }

    public serviceContent(inputName: string): string {
        var inputUpperCase: string = this.inputUpperCase(inputName);

        var serviceContent: string = "import { Injectable } from '@angular/core';\n" +
            "import { Http } from '@angular/http';\n" +
            "import { Observable } from 'rxjs/Observable';\n" +
            "import 'rxjs/add/operator/map';\n" +
            "\n" +
            "import { "+ inputUpperCase +" } from './"+ inputName +".model';\n" +
            "\n" +
            "@Injectable()\n" +
            "export class " + inputUpperCase + "Service {\n" +
            "\n" +
            "\tconstructor(private http: Http) { }\n" +
            "\n" +
            "\tgetList(): Observable<"+ inputUpperCase +"[]> {\n" +
            "\t\treturn this.http.get('/api/list').map(res => res.json() as "+ inputUpperCase +"[]);\n" +
            "\t}\n" +
            "}";
        return serviceContent;
    }

    public modelContent(inputName: string): string {
        var inputUpperCase: string = this.inputUpperCase(inputName);

        var modelContent: string = "export class "+ inputUpperCase +" {\n" +
            "\tid: number;\n" +
            "\tname: string;\n" +
            "}";
        return modelContent;
    }

    public templateContent(inputName: string): string {
        var inputUpperCase: string = this.inputUpperCase(inputName);

        var templateContent: string = `<div class="${inputName}"> Hello ${inputUpperCase}Component! </div>`;
        return templateContent;
    }

    public cssContent(inputName: string): string {
        var inputUpperCase: string = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        var cssContent: string = `.${inputName} {\n\n}`;
        return cssContent;
    }

    public specContent(inputName: string): string {
        var inputUpperCase: string = this.inputUpperCase(inputName);
        
        var specContent: string = "import { TestBed, inject } from '@angular/core/testing';\n" +
            "import { HttpModule } from '@angular/http';\n" +
            "import { Observable } from 'rxjs/Observable';\n" +
            "import 'rxjs/Rx';\n\n" +
            "import { " + inputUpperCase + "Component } from './" + inputName + ".component';\n" +
            "import { " + inputUpperCase + "Service } from './shared/" + inputName + ".service';\n" +
            "import { " + inputUpperCase + " } from './shared/" + inputName + ".model';\n" +
            "\n" +
            "describe('a "+ inputName +" component', () => {\n" +
                "\tlet component: " + inputUpperCase + "Component;\n" +
                "\n" +
                "\t// register all needed dependencies\n" +
                "\tbeforeEach(() => {\n" +
                    "\t\tTestBed.configureTestingModule({\n" +
                        "\t\t\timports: [HttpModule],\n" +
                        "\t\t\tproviders: [\n" +
                            "\t\t\t\t{ provide: " + inputUpperCase + "Service, useClass: Mock" + inputUpperCase + "Service },\n" +
                            "\t\t\t\t" + inputUpperCase + "Component\n" +
                        "\t\t\t]\n" +
                    "\t\t});\n" +
               "\t});\n" +
                "\n" +
                "\t// instantiation through framework injection\n" +
                "\tbeforeEach(inject([" + inputUpperCase + "Component], (" + inputUpperCase + "Component) => {\n" +
                    "\t\tcomponent = " + inputUpperCase + "Component;\n" +
                "\t}));\n" +
                "\n" +
                "\tit('should have an instance', () => {\n" +
                    "\t\texpect(component).toBeDefined();\n" +
                "\t});\n" +
            "});\n" +
            "\n" +
            "// Mock of the original " + inputName + " service\n" +
            "class Mock" + inputUpperCase + "Service extends " + inputUpperCase + "Service {\n" +
                "\tgetList(): Observable<any> {\n" +
                    "\t\treturn Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);\n" +
                "\t}\n" +
            "}\n";
        return specContent;
    }

    public moduleContent(inputName: string): string {
        var inputUpperCase: string = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        var content: string = ["import { NgModule } from \'@angular/core\';",
            "import { CommonModule } from \'@angular/common\';",
            "import { FormsModule }   from \'@angular/forms\';\n",
            "import { "+inputUpperCase+"Service } from \'./shared/"+inputName+".service\';",
            "import { "+inputUpperCase+"Routing } from \'./"+inputName+".routing\';",
            "import { "+inputUpperCase+"Component } from \'./"+inputName+".component\';\n",
            "@NgModule({",
            "    imports: [",
            "        CommonModule,",
            "        FormsModule,",
            "        "+inputUpperCase+"Routing",
            "    ],",
            "    exports: [],",
            "    declarations: [",
            "        "+inputUpperCase+"Component",
            "    ],",
            "    providers: ["+inputUpperCase+"Service]",
            "})",
            "export class "+inputUpperCase+"Module { }"].join("\n");
        return content;
    }

    public routingContent(inputName: string): string {
        var inputUpperCase: string = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        var content: string = ["import { ModuleWithProviders } from \'@angular/core\';",
            "import { Routes, RouterModule } from \'@angular/router\';\n",
            "import { "+inputUpperCase+"Component } from \'./"+inputName+".component\';\n",
            "const routes: Routes = [",
            "    {",
            "        path: \'\',",
            "        component: "+inputUpperCase+"Component",
            "    },",
            "    {",
            "        path:\'"+inputName+"\',",
            "        component: "+inputUpperCase+"Component",
            "    }",
            "];",
            "export const "+inputUpperCase+"Routing: ModuleWithProviders = RouterModule.forChild(routes);"].join("\n");
        return content;
    }


}