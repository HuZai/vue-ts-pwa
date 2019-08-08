import Vue from 'vue';
import Skeleton1 from './skeleton/Skeleton1.vue';
import Skeleton2 from './skeleton/Skeleton2.vue';

export default new Vue({
    components: {
        Skeleton1,
        Skeleton2
    },
    template: `
        <div>
            <skeleton1 id="skeletonIndex" style="display:none"/>
            <skeleton2 id="skeletonAbout" style="display:none"/>
        </div>
    `
});
