import { Component, Prop, h } from '@stencil/core';

@Component({
    tag:'to-do'
})
export class ToDo {

    @Prop() list:string;

    render() {
        return <div>ToDo List {this.list}</div>
    }
}