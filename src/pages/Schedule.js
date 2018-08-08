import React from "react";

import Day from "../components/Day";
import DayEmpty from "../components/DayEmpty";
import Time from "../components/Time";
import Jumbo from "../components/Jumbo";
import Title from "../components/Title";
import Slider from "../components/Slider";
import List from "../components/List";
import Aligner from "../components/Aligner";
import ScheduleCallSelector from "../components/ScheduleCallSelector";
import PhoneNumberForm from "../components/PhoneNumberForm";
import StylistMessageForm from "../components/StylistMessageForm";
import ScheduleButtons from "../components/ScheduleButtons";

class Schedule extends React.Component {
  state = {
    isLoading: true,
    timeSlots: [],
    form: {
      dialingCode: "+44",
      phoneNumber: "",
      message: ""
    }
  };

  componentDidMount() {
    fetch("https://nrg-frontend-task-api.herokuapp.com/timeslots")
      .then(response => response.json())
      .then(timeSlots => this.setState({ timeSlots, isLoading: false }));
  }

  handleChangeForm = form => {
    this.setState({ form });
  };

  handleSubmit = form =>
    fetch("https://nrg-frontend-task-api.herokuapp.com/appointments", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    });

  handleConfirm = () => {
    const { date, slot, type, message } = this.props.match.params;

    if (type === "message") {
      return this.props.history.push(`/success/We`);
    }

    if (message) {
      return this.handleSubmit({
        date,
        slot,
        orderConfirmationComment: this.state.form.message || "empty",
        phone: `${this.state.form.dialingCode}${this.state.form.phoneNumber}`
      })
        .then(response => response.json())
        .then(({ stylist }) => stylist)
        .then(stylist => {
          this.setState({ isLoading: false });
          this.props.history.push(`/success/${stylist}`);
        });
    }

    this.props.history.push(`/schedule/call/${date}/${slot}/message`);
  };

  getSlotsForDate = date =>
    (this.state.timeSlots.find(slot => slot.date === date) || {}).slots || [];

  render() {
    const { date, slot, type, message } = this.props.match.params;

    return (
      <div>
        {!message && (
          <ScheduleCallSelector
            isCall={type === "call"}
            onChange={() =>
              this.props.history.replace(
                type === "call" ? "/schedule/message" : "/schedule/call"
              )
            }
          />
        )}
        {type === "call" &&
          !message && (
            <div>
              <Aligner margin="8px 0">
                <Jumbo>
                  <Aligner margin="0 0 32px 0">
                    Schedule a call with your stylist at a time to suit you, to
                    talk about your order, style and preferences.
                  </Aligner>
                  <Title>Contact telephone number</Title>
                  <PhoneNumberForm
                    form={this.state.form}
                    onChange={this.handleChangeForm}
                  />
                </Jumbo>
              </Aligner>
              <Aligner margin="0 0 4px 16px">
                <Title>Pick a day and time</Title>
              </Aligner>
              <Aligner margin="0 0 8px 0">
                <Slider>
                  {this.state.timeSlots.map(({ date: timeSlotDate, slots }) => (
                    <Day
                      key={timeSlotDate}
                      onChange={() =>
                        this.props.history.replace(
                          `/schedule/call/${timeSlotDate}`
                        )
                      }
                      isActive={date === timeSlotDate}
                      isDisabled={!slots.length}
                      date={timeSlotDate}
                    />
                  ))}
                </Slider>
              </Aligner>
              <Aligner margin="0 0 16px 0">
                <List
                  maxHeight="136px"
                  items={this.getSlotsForDate(date)}
                  renderPlaceholder={() => date && <DayEmpty day={date} />}
                  getItemKey={item => item.start}
                >
                  {item => (
                    <Time
                      key={item.start}
                      isActive={item.start === slot}
                      onChange={() =>
                        this.props.history.replace(
                          `/schedule/call/${date}/${item.start}`
                        )
                      }
                      hour={item.start}
                    />
                  )}
                </List>
              </Aligner>
            </div>
          )}

        {(type !== "call" || message) && (
          <Aligner margin="32px 0">
            <StylistMessageForm
              showStylist={!!message}
              onChange={this.handleChangeForm}
              form={this.state.form}
            />
          </Aligner>
        )}

        <ScheduleButtons
          onClickSubmit={this.handleConfirm}
          onClickBack={this.props.history.goBack}
          isSubmitDisabled={
            (type !== "message" && (!slot || !this.state.form.phoneNumber)) ||
            this.state.isLoading
          }
        />
      </div>
    );
  }
}

export default Schedule;
