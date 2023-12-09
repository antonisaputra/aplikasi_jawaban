let jawaban = ['A','C','A','B','D','A','A','D','B','C','B','B','B','B','B','A','D','C','C','C','B','C','C','C','C','E','C','E','E','D','B','B','E','B','B','C','D','C','C','D']


for(let i = 1; i <= jawaban.length; i++){
    $('#halaman_jawaban').append(`<div class="mb-3 col-4">
    <label for="soal${i}" class="form-label fs-5">Soal ${i}</label>
    <div class="d-flex"><input type="text" class="form-control" id="soal${i}" placeholder="Masukkan Jawaban soal ${i}"><div id="check${i}"></div></div>
</div>`)
}
for(let y = 1; y <= 5; y++){
    $('#halaman_jawaban_isi').append(`<div class="mb-3 col-4">
    <label for="soalisi${y}" class="form-label fs-5">Soal Isi ${y}</label>
    <input type="number" class="form-control" id="soalisi${y}" placeholder="Masukkan Jawaban Soal ${y} Isian Nilai 0-4">
</div>`)
}
$('#lihat_hasil').append(`<div onclick="lihatHasil()" class="mb-3 btn btn-success ">
    (F12) Lihat Hasil
</div>`)
$('#lihat_hasil').append(`<div onclick="reset()" alert="return cofirm('yakin data ingi di reset');" class="mb-3 ms-3 btn btn-danger ">
    (F5) Reset
</div>`)

lihatHasil = () => {
    let nilai = 0
    // console.log(nilai)
    for(let i = 1; i <= jawaban.length; i++){

        let jawabanSiswa = $('#soal'+i).val()
        
        if(jawabanSiswa.toUpperCase() == jawaban[i-1]){
            console.log('Soal '+ (i) + ' Benar');
            nilai += 2
            $('#check'+i).html(`<i class="fa-solid fs-3 text-success ms-2 fa-check"></i>`)
        }else{
            nilai += 0
            $('#check'+i).html(`<i class="fa-solid fs-3 text-danger ms-2 fa-xmark"></i>`)
        }
    }
    for(let y = 1; y <= 5; y++){
        let valuejawabanSiswaIsi = $('#soalisi'+y).val()
        let jawabanSiswaIsi = parseInt(valuejawabanSiswaIsi);
        if(isNaN(jawabanSiswaIsi)){
            nilai += 0
        }else if(jawabanSiswaIsi >= 0 && jawabanSiswaIsi < 5){
            nilai = nilai + jawabanSiswaIsi
        } else{
            nilai += 0
            alert('Soal Isi '+y+' Harus 0-4')
        }
    }

    let nama_siswa = $('#nama').val()
    let kelas_siswa = $('#kelas').val()
    let view_hasil = `<h5 class="modal-title" id="exampleModalLabel"><span id="nama_modal">${nama_siswa}</span> || <span id="alamat_modal">${kelas_siswa}</span></h5>
    <h1 class="text-success">Nilai : <span id="nilai_siswa">${nilai}</span></h1>`
    $('#hasil').html(view_hasil)
}

reset = () => {
    location.reload()
}


document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        event.preventDefault(); // Mencegah perilaku default dari F12 (misalnya, membuka Developer Tools)
        // Lakukan aksi atau panggil fungsi ketika F12 ditekan
        lihatHasil()
        // ... tulis kode aksi yang ingin dilakukan di sini ...
    }else if(event.key === 'F5'){
        event.preventDefault(); // Mencegah perilaku default dari F12 (misalnya, membuka Developer Tools)
        // Lakukan aksi atau panggil fungsi ketika F12 ditekan
        reset()
    }
});


