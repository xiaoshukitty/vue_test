<template>
    <div class="coyp">
        <div>
            <div>将进酒·君不见</div>
            <div>君不见，黄河之水天上来，奔流到海不复回。</div>
            <div>君不见，高堂明镜悲白发，朝如青丝暮成雪。</div>
            <div>人生得意须尽欢，莫使金樽空对月。</div>
            <div>天生我材必有用，千金散尽还复来。</div>
            <div>烹羊宰牛且为乐，会须一饮三百杯。</div>
            <div>岑夫子，丹丘生，将进酒，杯莫停。</div>
            <div>与君歌一曲，请君为我倾耳听。</div>
            <div>钟鼓馔玉不足贵，但愿长醉不愿醒。</div>
            <div>古来圣贤皆寂寞，惟有饮者留其名。</div>
            <div>陈王昔时宴平乐，斗酒十千恣欢谑。</div>
            <div>主人何为言少钱，径须沽取对君酌。</div>
            <div>五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。</div>
        </div>
        <el-button type="primary" @click="copy" :data-clipboard-text="options" id="copyText">动态复制</el-button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            options: "",
        }
    },
    created() {

    },
    methods: {
        copy() {
            let str = `
                    将进酒·君不见
            君不见，黄河之水天上来，奔流到海不复回。
            君不见，高堂明镜悲白发，朝如青丝暮成雪。
            人生得意须尽欢，莫使金樽空对月。
            天生我材必有用，千金散尽还复来。
            烹羊宰牛且为乐，会须一饮三百杯。
            岑夫子，丹丘生，将进酒，杯莫停。
            与君歌一曲，请君为我倾耳听。
            钟鼓馔玉不足贵，但愿长醉不愿醒。
            古来圣贤皆寂寞，惟有饮者留其名。
            陈王昔时宴平乐，斗酒十千恣欢谑。
            主人何为言少钱，径须沽取对君酌。
            五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。
            `
            this.options = str;
            var clipboard = new this.Clipboard("#copyText");
            clipboard.on("success", function (e) {
                console.info("Action:", e.action);
                console.info("Text:", e.text);
                console.info("Trigger:", e.trigger);
                e.clearSelection();
            });
            clipboard.on("error", (e) => {
                this.popupH = true;
                // 释放内存
                clipboard.destroy();
            });
            this.$message({
                message: "复制成功",
                type: "success",
            });
        },
    },
}
</script>
  
<style lang="less" scoped>
.coyp {}
</style>
