<template>
    <div class="container pt-2">
        <h2 id="lelah">Detail Peminjaman</h2>
        <!-- Tambahkan logika atau tampilan lain sesuai kebutuhan -->
        <table class="table table-responsive">
            <tbody>
                <tr>
                    <td id="yahkin">ID</td>
                    <td id="yahkin"><input type="text" v-model="peminjaman.id" id="" class="form-control" readonly></td>
                </tr>
                <tr>
                    <td id="yahkin">Anggota</td>
                    <td id="yahkin"><input type="text" v-model="peminjaman.nama_anggota" id="" class="form-control" readonly></td>
                </tr>
                <tr>
                    <td id="yahkin">Judul</td>
                    <td id="yahkin"><input type="text" v-model="peminjaman.judul_buku" id="" class="form-control" readonly></td>
                </tr>
                <tr>
                    <td id="yahkin">Tanggal Pinjam</td>
                    <td id="yahkin"><input type="date" v-model="peminjaman.tanggal_peminjaman" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="yahkin">Tanggal Kembali</td>
                    <td id="yahkin"><input type="date" v-model="peminjaman.tanggal_pengembalian" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="yahkin">Status</td>
                    <td id="yahkin">
                        <select v-model="peminjaman.status_peminjaman" class="form-control">
                            <option value="DIPINJAM" :selected="peminjaman.status_peminjaman === 'DIPINJAM'">DIPINJAM</option>
                            <option value="DIKEMBALIKAN" :selected="peminjaman.status_peminjaman === 'DIKEMBALIKAN'">DIKEMBALIKAN</option>
                        </select>   
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                      <button class="btn btn-warning me-2" @click="updatePeminjaman">Update</button>
                      <button class="btn btn-warning text-light" @click="backToPeminjaman">Kembali</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<style>

#yahkin{
  background-color: #3B3B3B;
  color: white;
}



#lelah{
  margin-left: 25rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}



</style>

<script>
import axios from 'axios';
import api from '../setting/api'

export default {
  data() {
    return {
      peminjaman: {
        id : ''
      },
    };
  },
  created() {
    if (this.$route.params.id) {
        this.getDetailpeminjaman();
    }
  },
  methods: {
    getDetailpeminjaman() {
      const id = this.$route.params.id;
      axios.get(api + `selectPeminjamanbyId.php?id=${id}`)
        .then(response => {
          this.peminjaman = response.data.data;
          console.log(response.data.data)
        })
        .catch(error => {
          console.error(error);
        });
    },
    updatePeminjaman() {
      let formData = new FormData();
        formData.append('id', this.peminjaman.id)
        formData.append('status_peminjaman', this.peminjaman.status_peminjaman)
        var bk = {};
        formData.forEach(function(value, key){
            bk[key] = value;
        });
        console.log(this.buku)
        axios({
            method: 'post',
            url: api + 'updatePeminjamanbyId.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(response => {
        // Berhasil menambahkan buku, lakukan tindakan yang sesuai
            console.log('Peminjaman berhasil diupdate:', response.data);
            window.location.reload();
        })
        .catch(error => {
        // Terjadi kesalahan saat menambahkan buku, tangani kesalahan
        console.error('Gagal update peminjaman:', error);
        });
    },
    backToPeminjaman(){
      this.$router.push('/peminjaman');
    }
  }
}
</script>