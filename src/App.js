import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className='basic'>
          <input type="text" placeholder={'+200 new samsung tv'}></input>
          <input type="datetime-local"></input>
        </div>
        <div className='description'>
          <input type="text" placeholder={'descreption'}></input>
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>It was time for new TV</div>
          </div>
          <div className='right'>
            <div className='price'>$500</div>
            <div className='datetime'>22-12-18 15:45</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>It was time for new TV</div>
          </div>
          <div className='right'>
            <div className='price'>$500</div>
            <div className='datetime'>22-12-18 15:45</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>It was time for new TV</div>
          </div>
          <div className='right'>
            <div className='price'>$500</div>
            <div className='datetime'>22-12-18 15:45</div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default App;
