const display = document.getElementById('display');
let yeniIslemBasliyor = false; // Yeni işlem kontrol bayrağı

function appendToDisplay(input) {
    // Eğer yeni bir işlem başlamak üzereyse ve rakama/işarete basıldıysa ekranı temizle
    if (yeniIslemBasliyor) {
        display.value = "";
        yeniIslemBasliyor = false;
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
    yeniIslemBasliyor = false;
}

function clearLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Sonucu ekrana yaz
        display.value = eval(display.value);
        // Eşittir'e basıldığı için, sonraki ilk tuş basımında ekranın silineceğini aktif et
        yeniIslemBasliyor = true; 
    } catch (error) {
        display.value = "Hata";
        yeniIslemBasliyor = true;
    }
}