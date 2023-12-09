let jawaban = ['A','C','A','B','D','A','A','D','B','C','B','B','B','B','B','A','D','C','C','C','B','C','C','C','C','E','C','E','E','D','B','B','E','B','B','C','D','C','C','D']


for(let i = 1; i <= jawaban.length; i++){
    $('#halaman_jawaban').append(`<div class="mb-3 col-4">
    <label for="soal${i}" class="form-label fs-5">Soal ${i}</label>
    <input type="email" class="form-control" id="soal${i}" placeholder="Masukkan Jawaban soal ${i}">
</div>`)
}
$('#halaman_jawaban').append(`<div onclick="lihatHasil()" data-bs-toggle="modal" data-bs-target="#exampleModal" class="mb-3 btn btn-success ">
    Lihat Hasil
</div>`)

lihatHasil = () => {
    var nilai = 0

    for(let i = 1; i <= jawaban.length; i++){

        let jawabanSiswa = $('#soal'+i).val()
        
        if(jawabanSiswa.toUpperCase() == jawaban[i-1]){
            console.log('Soal '+ (i) + ' Benar');
            nilai += 2
        }else{
            console.log('Soal '+ (i) + ' Salah');
            nilai += 0
        }
    }
    let nama_siswa = $('#nama').val()
    let kelas_siswa = $('#kelas').val()
    $('#nama_modal').html(nama_siswa)
    $('#alamat_modal').html(kelas_siswa)
    $('#nilai_siswa').html(nilai)
}



