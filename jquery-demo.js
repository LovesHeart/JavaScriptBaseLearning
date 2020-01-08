class jQuery {
    constructor(selector){
        const result=document.querySelectorAll(selector)
        const length=result.length
        for(let i=0;i<length;i++){
            this[i]=result[i]
        }
        this.length=length
        this.selector=selector
    }
    get(index){
        return this[index]
    }
    each(fn){
        for(let i=0;i<this.length;i++){
            const elem=this[i]
            fn(elem)
        }
    }
    on(type,fn){
        return this.each(elem/* 箭头函数的意义就是elem作为参数传入到后面的函数中去 */=>{
            elem.addEventListener(type,fn,false)
            /**
             * EventTarget.addEventListener() 方法将指定的监听器注册到 EventTarget 上，
             * 当该对象触发指定的事件时，指定的回调函数就会被执行。 
             * 事件目标可以是一个文档上的元素 Element,Document和Window或者任何其他支持事件的对象 (比如 XMLHttpRequest)。
             * 
             * addEventListener()的工作原理是将实现EventListener的函数或对象添加到调用它的EventTarget上的指定事件类型的事件侦听器列表中。
             * 
             * 
             * 语法
             * target.addEventListener(type, listener, useCapture);
             * 
             * 
             * type 表示监听事件类型的字符串。
             * 
             * listener 当所监听的事件类型触发时，会接收到一个事件通知（实现了 Event 接口的对象）对象。
             * listener 必须是一个实现了 EventListener 接口的对象，或者是一个函数。
             * 有关回调本身的详细信息，请参阅The event listener callback https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#The_event_listener_callback
             * 
             * 
             * useCapture  可选Boolean，在DOM树中，注册了listener的元素， 是否要先于它下面的EventTarget，调用该listener。
             * 当useCapture(设为true) 时，沿着DOM树向上冒泡的事件，不会触发listener。
             * 当一个元素嵌套了另一个元素，并且两个元素都对同一事件注册了一个处理函数时，所发生的事件冒泡和事件捕获是两种不同的事件传播方式。
             * 事件传播模式决定了元素以哪个顺序接收事件。进一步的解释可以查看 事件流 及 JavaScript Event order 文档。 
             * http://www.w3.org/TR/DOM-Level-3-Events/#event-flow
             * http://www.quirksmode.org/js/events_order.html#link4
             * 如果没有指定， useCapture 默认为 false 。  
             */
        })//箭头
    }
}

class myJQuery extends jQuery{
    constructor(selector){
        super(selector)
    }
    //
    addClass(className){

    }
    style(data){
        
    }
}

