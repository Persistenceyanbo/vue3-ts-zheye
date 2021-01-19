import { ref, onMounted, onUnmounted, Ref } from 'vue';
// Ref 代表的是一个类型 
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
    const isClickOutside = ref(false);
    const handler = (e: MouseEvent) => {
        if (elementRef.value) { // 如果元素存在
            if (elementRef.value.contains(e.target as HTMLElement)) {
                isClickOutside.value = false;
            } else {
                isClickOutside.value = true;
            }
        }
    }
    onMounted( () => {
        document.addEventListener('click', handler);
    })
    onUnmounted(() => {
        document.removeEventListener('click', handler);
    })
    return isClickOutside;
}
export default useClickOutside;