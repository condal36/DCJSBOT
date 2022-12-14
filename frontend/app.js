Vue.createApp({
    data(){
        return{
            goals:[],
            GuidIDInput:'',
            Messageinput:''
        };
    },
    methods:{
        addGuidInput(){
            this.goals.push(this.GuidIDInput);
        },
        async sendMsg(){
            
            res=await axios({
                method:'post',
                url:'http://localhost:3000/messages/sendMsgToChannel',
                data:{
                    msg:this.Messageinput,
                    guid:this.GuidIDInput,
                },
            })
            alert(res.data);
        }
    }
}).mount('#app');