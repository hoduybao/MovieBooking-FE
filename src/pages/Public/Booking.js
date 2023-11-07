import React, { useState } from 'react';
import "../../style/booking.css";

function SeatSelection() {
  const [selectedSeats, setSelectedSeats] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const seatPrice = 50000;

  const toggleSeat = (seat) => {
    let updatedSeats = selectedSeats;

    if (selectedSeats.includes(seat)) {

      updatedSeats = updatedSeats.split(', ').filter((selected) => selected !== seat).join(', ');
    } else {

      updatedSeats = updatedSeats ? updatedSeats + ', ' + seat : seat;
    }

    setSelectedSeats(updatedSeats);
    updateTotalPrice(updatedSeats);
  };

  const updateTotalPrice = (newSelectedSeats) => {
    const seats = newSelectedSeats.split(', ').filter(Boolean); // Lọc bỏ chuỗi rỗng
    const newTotalPrice = seats.length * seatPrice;
    setTotalPrice(newTotalPrice);
  };

  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const numSeatsPerRow = 10;

  return (
    <div className="reserve-container">
      <div className="seat-selection">
        <div className="seat-type">

          <div className="model-container">
            <div className="seat-type-model"></div>
            <div className="label">Ghế thường</div>
          </div>
          <div className="model-container">
            <div className="seat-type-model-2"></div>
            <div className="label">Ghế đang chọn</div>
          </div>
          <div className="model-container">
            <div className="seat-type-model-3"></div>
            <div className="label">Ghế VIP</div>
          </div>
          <div className="model-container">
            <div className="seat-type-model-4"></div>
            <div className="label">Ghế đã đặt</div>
          </div>

        </div>
        <div className="selection-container">

          <div className="seat-map">

            <div className="row-label">
              {rows.map((row) => (
                <div key={row} className="seat-label">
                  {row}
                </div>
              ))}
            </div>
            {Array.from({ length: numSeatsPerRow }, (_, index) => (
              <div key={index} className="seat-row">
                {rows.map((row) => {
                  const seat = row + (index + 1);
                  const isSelected = selectedSeats.includes(seat);
                  return (
                    <div
                      key={seat}
                      className={`seat ${isSelected ? "selected" : ""}`}
                      onClick={() => toggleSeat(seat)}
                    >
                      {seat}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="checkout">
            <div className="checkout-name">Thông tin đặt vé</div>
            <div>..............................................................................................................</div>
            <div className="selected-seats-name">John Wick</div>
            <div>Ngày tháng - Phòng</div>
            <br />
            <div>..............................................................................................................</div>
            <div className="selected-seats">
              <div className="selected-seats-name">Ghế đã chọn:</div>
              <div className="seat-numbers">{selectedSeats}</div>
            </div>
            <div className="total-price">
              <div className="total-price-name">Tổng tiền:</div>
              <div>{totalPrice} VND</div>
            </div>
            <div>..............................................................................................................</div>
            <div className="selected-seats">
              <div className="selected-seats-name">Phone:</div>

            </div>
            <div>..............................................................................................................</div>
            <div className="selected-seats">
              <div className="selected-seats-name">Mã giảm giá:</div>

            </div>
            <div>..............................................................................................................</div>
            <button class="button">Đặt vé</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeatSelection;
