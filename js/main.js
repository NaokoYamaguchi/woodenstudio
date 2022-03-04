Vue.createApp({
    data(){
        return{
            id:'WS–SF101–FG',
            product:'ソファ二人掛け フレッシュグリーン',
            image:'./img/photo06.jpg'
        }
    },
        methods:{
            selectGreen(){
                this.id='WS–SF101–FG',
                this.product='ソファ二人掛け フレッシュグリーン',
                this.image='./img/photo06.jpg'
            },
            selectBlue(){
                this.id='WS–SF101–MB',
                this.product='ソファ二人掛け ミッドナイトブルー',
                this.image='./img/photo06-mb.jpg'
            },
            selectBrown(){
                this.id='WS–SF101–CB',
                this.product='ソファ二人掛け チョコレートブラウン',
                this.image='./img/photo06-cb.jpg'
            }
        }
}).mount('#app')