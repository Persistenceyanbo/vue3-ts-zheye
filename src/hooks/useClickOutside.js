import { ref, onMounted, onUnmounted } from 'vue';
// Ref 代表的是一个类型 
var useClickOutside = function (elementRef) {
    var isClickOutside = ref(false);
    var handler = function (e) {
        if (elementRef.value) { // 如果元素存在
            if (elementRef.value.contains(e.target)) {
                isClickOutside.value = false;
            }
            else {
                isClickOutside.value = true;
            }
        }
    };
    onMounted(function () {
        document.addEventListener('click', handler);
    });
    onUnmounted(function () {
        document.removeEventListener('click', handler);
    });
    return isClickOutside;
};
export default useClickOutside;
//# sourceMappingURL=useClickOutside.js.map