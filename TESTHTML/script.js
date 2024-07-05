let count = 0;

function incrementCounter() {
    count++;
    let formattedCount = pad(count, 6); // �������������� �������� �� ����� ������
    document.getElementById("counter").innerText = formattedCount;
}

// ������� ��� ���������� ������� ����� �� ������ �����
function pad(num, size) {
    let s = "000000" + num;
    return s.substr(s.length - size);
}
